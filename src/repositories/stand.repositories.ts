import { supabase } from "../utils/supabase.js";
import Stand from "../models/Stand.class.js";

export default class StandRepository {
  async getStands(): Promise<Stand[]> {
    const { data, error } = await supabase.from("Stand").select("*");

    if (error) throw error;

    return data.map((standData) => new Stand(standData));
  }

  async getStand(id: number): Promise<Stand> {
    const { data, error } = await supabase
      .from("Stand")
      .select("*")
      .eq("id", id)
      .maybeSingle();

    if (error) throw error;

    return data;
  }

  async addStand(stand: Stand): Promise<Stand> {
    const { data, error } = await supabase
      .from("Stand")
      .insert(stand)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  async replaceStand(id: number, standData: Omit<Stand, "id">): Promise<Stand> {
    const { data, error } = await supabase
      .from("Stand")
      .update(standData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  async updateStand(id: number, standData: Partial<Stand>): Promise<Stand> {
    const { data, error } = await supabase
      .from("Stand")
      .update(standData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  async deleteStand(id: number): Promise<Stand> {
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
