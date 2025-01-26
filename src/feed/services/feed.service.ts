import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FeedPostEntity } from '../models/post_ententity';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPost } from '../models/post_interface';
import { Observable } from 'rxjs';
import { from } from 'rxjs';


@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>
    ){}

    createPost(feedpost: FeedPost){
        return this.feedPostRepository.save(feedpost);
    }
}
