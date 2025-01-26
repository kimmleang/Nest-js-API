import { Observable } from 'rxjs';
import { FeedPost } from '../models/post_interface';
import { FeedService } from './../services/feed.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('feed') //endpoint
export class FeedController {

    constructor(
        private feedService: FeedService
    ){}

    @Post()
    create(@Body() post: FeedPost){
        return this.feedService.createPost(post)
    }

}
