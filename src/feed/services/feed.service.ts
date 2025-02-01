import { FeedPost } from './../models/post_interface';
import { FeedController } from './../controllers/feed.controller';
import { Injectable, Post } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FeedPostEntity } from '../models/post_ententity';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable, from, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

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
    findOne(id: number): Observable<FeedPost> {
        return from(this.feedPostRepository.findOne({ where: { id } })).pipe(
            map(post => {
                if (!post) {
                    throw new Error(`Post with ID ${id} not found`);
                }
                return post;
            }),
            catchError(err => throwError(() => new Error(err.message)))
        );
    }
    updatePost(id:number,feedpost: Partial<FeedPost>): Observable<FeedPost> {
        return from(this.feedPostRepository.update(id, feedpost)).pipe(
            switchMap(()=> this.findOne(id)),
            catchError(err => throwError(()=> new Error(err.message)))
        )
    }
    deletePost(id:number): Observable<any> {
        return from(this.feedPostRepository.delete(id)).pipe(
            catchError(err => throwError(()=> new Error(err.message)))
        )
    }


    




    

   


}