import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne} from "typeorm"
import { User } from "./user.entitie"


@Entity("contacts")
class Contact {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({type: "varchar", length: 50})
    name: string

    @Column({type: "varchar", length: 80, unique: true})
    email: string

    @Column({ type: 'varchar', length: 11 })
    phone: number   

    @CreateDateColumn()
    createdAt?: string | Date

    @ManyToOne(() => User)
    user: User

}

export {Contact}