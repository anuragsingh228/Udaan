const Review = require("../model/review");

exports.justChecking = (req, res) => {
    res.status(200).json({
        message: "Yup Working!"
      });
}


/*****************************  Get All Reviews ****************/

exports.getAllReview = (req, res, next) => {
  const query = Review.find({}).select(('-activity -isPublished -activity -updatedAt'))
    query.exec( function(err, reviews) {
      if(!err){
        res.status(200).json(reviews);
      } else{
          console.log(err);
      }
    });
}

/**********************  Add new Review ********************************/

exports.addReview =  (req, res, next) => {
    const { title, content,  subheader,  tags, isPublished } = req.body;
    const createdBy = [req.user._id];
    try {
        const newReview = Review({
            createdBy,
            title,
            content,
            subheader,
            tags,
            isPublished
          });
          newReview.save((err, review) => {
            if(!err){
              req.id=review._id;
              req.activity= req.user.email + " created the review";
              next();
              //res.status(200).json(review);
            } else {
                console.log(err);
            }
          });
    }catch (err) {
        return res.status(500).json({ errors: [{ msg: "Server Error" }] });
      }
}


/*************** Add activity to the review *******************/

exports.addActivity = (req, res, next) => {
	Review.updateOne({_id: req.id}, { $push: { activity: req.activity } },(err, review) => {
    if(!err){
      res.status(200).json(review);
    } else{
      console.log(err);
    }
  } );
};


/****************** Get all the reviews for a particular User  ************/

exports.getAllReviewByUser = (req, res, next) => {
  const revieIds = req.demouser.reviews
  const query  = Review.find({"_id": {$in: revieIds} })
  query.exec((err, reviews) => {
    if(err){
      console.log(err)
    } else {
      res.status(200).json(reviews);
    }
  })
}

/****************** Get an review by id  **********************************/
exports.getRevieById = (req, res, next) => {
  const id = req.params.id
  const query = Review.findById(id).select('-activity -isPublished -activity -updatedAt')
  query.exec((err, review) => {
    if(review){
      return res.status(200).json(review);
    } else{
      return res.status(400).json(err);
    }
  });
}
