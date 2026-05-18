import { supabase } from "../utils/supabase.js";
import type IStand from "../types/IStand.js";
import Stand from "../models/Stand.class.js";
import type { DTOStand, DTOPartialStand } from "../types/StandDTO.js";

export default class StandRepository {
  async getStands(): Promise<Stand[]> {
    const { data, error } = await supabase.from("Stand").select("*");

    if (error) throw error;

    return data.map((standData) => new Stand(standData));
  }

  async getStand(id: number): Promise<IStand> {
    const { data, error } = await supabase
      .from("Stand")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data;
  }

  async getStandCount(): Promise<number> {
    const { count, error } = await supabase
      .from("Stand")
      .select("id", { count: "exact", head: true });

    if (error) throw error;

    return typeof count === "number" ? count : 0;
  }

  async addStand(stand: DTOStand): Promise<IStand> {
    const { data, error } = await supabase
      .from("Stand")
      .insert(stand)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  async uploadImage(id: number, file: Express.Multer.File): Promise<string> {
    const filePath = `${id}/stand.webp`;
    const { error } = await supabase.storage
      .from("stands")
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
        upsert: true,
      });

    if (error) throw error;

    const { data } = supabase.storage.from("stands").getPublicUrl(filePath);

    const img = data.publicUrl;

    const { error: updateError } = await supabase
      .from("Stand")
      .update({ img })
      .eq("id", id);

    if (updateError) throw updateError;

    return img;
  }

  async replaceStand(id: number, standData: DTOStand): Promise<IStand> {
    const { data, error } = await supabase
      .from("Stand")
      .update(standData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  async updateStand(id: number, standData: DTOPartialStand): Promise<Stand> {
    const { data, error } = await supabase
      .from("Stand")
      .update(standData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  async deleteStand(id: number): Promise<IStand> {
    const { data, error } = await supabase
      .from("Stand")
      .delete()
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }
}
