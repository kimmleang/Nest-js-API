import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FeedPostEntity } from '../models/post_ententity';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedPost } from '../models/post_interface';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class FeedService {
    constructor(
        @InjectRepository(FeedPostEntity)
        private readonly feedPostRepository: Repository<FeedPostEntity>
    ){}

    createPost(feedpost: FeedPost): Observable<FeedPost> {
        return from(this.feedPostRepository.save(feedpost));
    }

    findAllPosts(): Observable<FeedPost[]> {
        return from(this.feedPostRepository.find());
    }


}