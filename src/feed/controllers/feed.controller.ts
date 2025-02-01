import { FeedPost } from './../models/post_interface';
import { Observable } from 'rxjs';
import { FeedService } from './../services/feed.service';
import { Body, Controller, Get, Post, Put, Param, Delete } from '@nestjs/common';

@Controller('api/feed') //endpoint
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

    @Get(':id')
    findOne(@Param('id') id:number){
        return this.feedService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id:number,@Body() post: Partial<FeedPost>): Observable<FeedPost>{
        return this.feedService.updatePost(+id,post)
    }

    @Delete(':id')
    delete(@Param('id') id:number): Observable<any> {
        return this.feedService.deletePost(id);
    }





}