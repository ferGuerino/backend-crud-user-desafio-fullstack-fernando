import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne} from "typeorm"
import { User } from "./user.entitie"


@Entity("contacts")
class Contact {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column({type: "varchar", length: 50})
    name: string

    @Column({type: "varchar", length: 80, unique: true})
    email: string

    @Column({ type: 'varchar', length: 11 })
    phone: string   

    @CreateDateColumn()
    createdAt?: string | Date

    @ManyToOne(() => User)
    user: User

}

export {Contact}