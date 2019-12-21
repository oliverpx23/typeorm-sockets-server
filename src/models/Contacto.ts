import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity, JoinColumn, OneToMany, OneToOne} from 'typeorm';

@Entity({
    name: 'contacto',
    synchronize: true
})
export class ContactoModel extends BaseEntity {

    @PrimaryGeneratedColumn({type: 'bigint', name: 'id_relacion_contacto'})
    id_relacion_contacto: number;

    @Column({type: 'date' , name: 'fecha_inicio'})
    fecha_inicio: Date;

    @Column({type: 'bigint'})
    contacto: bigint;

    @Column({type: 'bigint', name: 'id_usuario'})
    id_usuario: bigint;

}
