import { User } from 'src/user/entities/user.entity';
import { IsDate, IsString } from 'class-validator';
import { JoinColumn, Entity, Column,ManyToOne,PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('posts')
export class PostEntity {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @Column()
    @IsString()
    postTitle: string

    @ManyToOne(()=>User,(users)=>users.id)
    @JoinColumn()
    users: User[]

    @ApiProperty()
    @Column()
    userID:number

    @ApiProperty()
    @Column()
    @IsString()
    postDescription: string

    @ApiProperty()
    @Column()
    postLikes: number

    @ApiProperty()
    @Column()
    postDislikes: number

    @ApiProperty()
    @Column({ type: 'timestamp', name: 'create_time', default: () => 'CURRENT_TIMESTAMP' })
    @IsDate()
    createTime: Date;

    // @ApiProperty()
    // @Column()
    // postImage: string      //может придется поменять на [any]


    // @ApiProperty()
    // @Column({ type: 'timestamp',name: 'update_time', default: () => 'CURRENT_TIMESTAMP' })
    // @IsDate()
    // updateTime: Date;

    
}
