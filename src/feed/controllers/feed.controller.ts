import { Observable } from 'rxjs';
import { FeedPost } from '../models/post_interface';
import { FeedService } from './../services/feed.service';
import { Body, Controller, Get, Post, Put, Param } from '@nestjs/common';
import { HttpCode, HttpStatus } from '@nestjs/common';

@Controller('feed') //endpoint
export class FeedController {

    constructor(
        private feedService: FeedService
    ){}

    @Post()
    create(@Body() post: FeedPost): Observable<FeedPost> {
        return this.feedService.createPost(post);
    }

    @Get()
    findAll(): Observable<FeedPost[]> {
        return this.feedService.findAllPosts();
    }
}