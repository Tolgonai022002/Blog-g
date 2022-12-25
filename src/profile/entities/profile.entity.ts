import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/user/entities/user.entity";
import { Column, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export class Profile {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column()
    userId: number

    @ManyToOne(()=>User,(users)=>users.id)
    @JoinColumn({name:'ID'})
    users: User[]

    @ApiProperty()
    @Column()
    title: string

    @ApiProperty()
    @Column()
    description: string
    
}
