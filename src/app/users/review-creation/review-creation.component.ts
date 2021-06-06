import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-creation',
  templateUrl: './review-creation.component.html',
  styleUrls: ['./review-creation.component.css']
})
export class ReviewCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  justChecking="Hello I am Anurag Singh";

  basicEditorOptions = {
		toolbar: [
			['bold', 'italic', 'underline', 'strike'],
			['blockquote', 'code-block'],
			[{ list: 'ordered' }, { list: 'bullet' }],
			[{ script: 'sub' }, { script: 'super' }],
			[{ indent: '-1' }, { indent: '+1' }],
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			[{ align: [] }],
			['clean'],
			['link', 'image']
		]
	};

}
