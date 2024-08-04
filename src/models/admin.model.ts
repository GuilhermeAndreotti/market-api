import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('admin')
export class Admin {
    @PrimaryGeneratedColumn('uuid', { name: 'admin_id' })
    adminId: string;

    @Column({ type: 'varchar', nullable: true })
    login: string;

    @Column({ type: 'varchar', nullable: true })
    password: string;

    @Column({ name: 'is_master', type: 'boolean', nullable: true })
    isMaster: boolean;

    @Column({ name: 'first_access', type: 'boolean', nullable: true, default: false })
    firstAccess: boolean;

    @Column({ name: 'access_code', type: 'varchar', nullable: true })
    accessCode?: string;

    @Column({ name: 'access_token', type: 'varchar', nullable: true })
    accessToken?: string;

    @Column({ type: 'varchar', nullable: true })
    name: string;
    
    @Column({ type: 'varchar', nullable: true })
    phone: string;

    @Column({ name: 'can_integrate', type: 'boolean', nullable: true })
    canIntegrate: boolean;

    @Column({ name: 'can_create_users', type: 'boolean', nullable: true })
    canCreateUsers: boolean;

}