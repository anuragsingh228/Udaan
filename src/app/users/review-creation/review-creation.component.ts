import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../users.service';


@Component({
  selector: 'app-review-creation',
  templateUrl: './review-creation.component.html',
  styleUrls: ['./review-creation.component.css']
})
export class ReviewCreationComponent implements OnInit {
  tags=  new Set<string>();

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  justChecking="";

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

  onSubmit(form: NgForm){
    console.log(form);
    this.userService.addReview(form.value.bookName, form.value.content);
    form.resetForm();
    this.router.navigate(['']);
  }

  addTag(tag){
    this.tags.add(tag);
  }
  removeTag(tag){
    this.tags.delete(tag);
  }

}
