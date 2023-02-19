import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  isMuted: boolean = true
  isPause: boolean = false
  constructor(private router: ActivatedRoute){

  }

  ngOnInit(): void {
    console.log(this.router)
  }

  unMuteVideo(video: HTMLVideoElement){
    video.muted = false
    this.isMuted = false
  }

  stopVideo(video:HTMLVideoElement){
    video.pause()
    this.isPause = true
  }

  muteVideo(vidoe: HTMLVideoElement){
    vidoe.muted = true
    this.isMuted = true
  }

  playVideo(video: HTMLVideoElement){
    video.play()
    this.isPause = false
  }
}
