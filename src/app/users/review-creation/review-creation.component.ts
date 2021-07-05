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
  isPublish : boolean;

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
    let tags = Array.from(this.tags)
    this.userService.addReview(form.value.title, form.value.content, form.value.subheader, tags, this.isPublish );
    form.resetForm();
    this.router.navigate(['']);
  }

  addTag(tag){
    this.tags.add(tag);
  }
  removeTag(tag){
    this.tags.delete(tag);
  }
  onDraft(){
    this.isPublish=false
  }
  onPublish(){
    this.isPublish=true;
  }

}
