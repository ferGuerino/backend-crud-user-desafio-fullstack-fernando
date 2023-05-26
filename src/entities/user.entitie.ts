import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany} from "typeorm"
import { Contact } from "./contact.entities"


@Entity("users")
class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "varchar", length: 50})
    name: string

    @Column({type: "varchar", length: 80, unique: true})
    email: string

    @Column({ type: 'varchar', length: 11 })
    phone: string

    @Column({ type: 'varchar', length: 120 })
    password: string

    @CreateDateColumn()
    createdAt?: string | Date

    @OneToMany(() => Contact, contact => contact.user)
    contacts: Contact[]

}

export {User}