export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          created_at: string
          full_name: string
          id: string
          message: string
          phone: string
        }
        Insert: {
          created_at?: string
          full_name: string
          id?: string
          message: string
          phone: string
        }
        Update: {
          created_at?: string
          full_name?: string
          id?: string
          message?: string
          phone?: string
        }
        Relationships: []
      }
      survey_responses: {
        Row: {
          assist_guidance: number | null
          biggest_obstacles: string[] | null
          can_overcome: number | null
          connect_emotionally: number | null
          created_at: string
          cut_back: number | null
          email: string
          harm_relationships: number | null
          how_motivated: string | null
          how_often: string | null
          id: string
          life_impacts: string[] | null
          more_extreme: string | null
          negatively_affected: number | null
          porn_role: string | null
          positive_changes: string[] | null
          relationship_effects: string[] | null
          relationships_impact: string | null
          self_esteem: number | null
          sex_life_effects: string[] | null
          triggers_habit: string[] | null
          urges_cravings: number | null
          user_age: number | null
          what_emotions: string[] | null
        }
        Insert: {
          assist_guidance?: number | null
          biggest_obstacles?: string[] | null
          can_overcome?: number | null
          connect_emotionally?: number | null
          created_at?: string
          cut_back?: number | null
          email: string
          harm_relationships?: number | null
          how_motivated?: string | null
          how_often?: string | null
          id?: string
          life_impacts?: string[] | null
          more_extreme?: string | null
          negatively_affected?: number | null
          porn_role?: string | null
          positive_changes?: string[] | null
          relationship_effects?: string[] | null
          relationships_impact?: string | null
          self_esteem?: number | null
          sex_life_effects?: string[] | null
          triggers_habit?: string[] | null
          urges_cravings?: number | null
          user_age?: number | null
          what_emotions?: string[] | null
        }
        Update: {
          assist_guidance?: number | null
          biggest_obstacles?: string[] | null
          can_overcome?: number | null
          connect_emotionally?: number | null
          created_at?: string
          cut_back?: number | null
          email?: string
          harm_relationships?: number | null
          how_motivated?: string | null
          how_often?: string | null
          id?: string
          life_impacts?: string[] | null
          more_extreme?: string | null
          negatively_affected?: number | null
          porn_role?: string | null
          positive_changes?: string[] | null
          relationship_effects?: string[] | null
          relationships_impact?: string | null
          self_esteem?: number | null
          sex_life_effects?: string[] | null
          triggers_habit?: string[] | null
          urges_cravings?: number | null
          user_age?: number | null
          what_emotions?: string[] | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
