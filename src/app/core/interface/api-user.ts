export interface ApiUser {
    
        id_user?: number;
        sub?: string;
        name?: string;
        picture?: string;
        email?: string;
        id_role?: number;
        role_user?: string;
        created_at?: Date;
        given_name?: string;
        family_name?: string;
        nickname?: string;
        locale?: string;
        updated_at?: string;
        email_verified?: string;
        contacto?:string;
        role?: number;
        id_empresa?: number;
        name_enterprise?: string;
        
}