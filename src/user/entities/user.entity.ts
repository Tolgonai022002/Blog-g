import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ApiProperty } from '@nestjs/swagger';
import { Exclude } from "class-transformer";
import { PostEntity } from "src/post/entities/post.entity";


@Entity('user')
export class User {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number                                                          

    @ApiProperty({description: 'Имя пользователя'})
    @Column()
    fullname: string

    @ApiProperty()
    @Column()
    nickname: string

    @Exclude()
    @Column()
    password: string

    @Exclude()
    @Column()
    login: string


    // @ApiProperty()
    // @Column()
    // avatar: string

    // @OneToMany(()=>PostEntity, (post)=>post.postAvtor)
    // @JoinColumn()
    // posts: PostEntity[]

    // @ApiProperty()
    // @Column({name:'create_time',type: 'timestamp',default: ()=>'CURRENT_TIMESTAMP'})
    // createPageTime: Date

    @ApiProperty()
    @Column()
    email: string

    // @OneToMany(()=>)


    // @ApiProperty()
    // @Column()
    // passwordSalt: string | null;

}

