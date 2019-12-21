import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity} from "typeorm";
import * as bcrypt from 'bcrypt';

export enum RolUsuario {
    USER = "USER",
    ADMIN = "ADMIN",
    SUPERADMIN = "SUPERADMIN"
}

@Entity({
    name: 'usuarios_dashboard',
    synchronize: true
})
export class UsuarioDashboardModel extends BaseEntity {

    @PrimaryGeneratedColumn()
    Id_Usuario: number;

    @Column({type: 'varchar'})
    Nombre: string

    @Column({type: 'varchar', unique: true})
    UserName: string;

    @Column({type: 'varchar'})
    Password: string;

    @Column({type: 'enum', nullable: false, enum: RolUsuario, default: RolUsuario.USER})
    Rol: RolUsuario;

    @Column({type: 'varchar', nullable: true})
    ImgUrl: string;

    @Column({type: 'integer', nullable: false, default: 0})
    Estado: number;


    compararPassword(password: string): boolean {
        if (bcrypt.compareSync(password, this.Password)) {
            return true;
        } else {
            return false;
        }
    }


}
