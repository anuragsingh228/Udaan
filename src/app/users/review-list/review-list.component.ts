import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../users.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {
  @Input() allreview = null
  viewOnlyEditorOption = {
		toolbar: false,
		clipboard: {
			matchVisual: false
		}
	};

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  stripTags(content: string) {
		return content.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').slice(0, 200);
	}
}
