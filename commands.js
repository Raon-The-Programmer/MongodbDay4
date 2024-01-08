//Find all the topics and tasks which are taught in the month of October:

db.topics.find({});

db.tasks.find({
  "submission_date": {
    $gte: ISODate("2020-10-01T00:00:00Z"),
    $lte: ISODate("2020-10-31T23:59:59Z")
  }
});


//Find all the company drives which appeared between 15 Oct 2020 and 31 Oct 2020:

db.company_drives.find({
    "date": {
      $gte: ISODate("2020-10-15T00:00:00Z"),
      $lte: ISODate("2020-10-31T23:59:59Z")
    }
  });

  
//Find all the company drives and students who appeared for the placement:

db.company_drives.find({});

//Find the number of problems solved by the user in codekata:

db.codekata.aggregate([
    {
      $match: {
        "user_id": ObjectId("user1")
      }
    },
    {
      $group: {
        _id: null,
        total_problems_solved: {
          $sum: "$problems_solved"
        }
      }
    }
  ]);

  
//Find all the mentors with mentee's count more than 15:

db.mentors.find({
    "mentee_count": { $gt: 15 }
  });

  
//Find the number of users who are absent and the task is not submitted between 15 Oct 2020 and 31 Oct 2020:

db.attendance.find({
    "date": {
      $gte: ISODate("2020-10-15T00:00:00Z"),
      $lte: ISODate("2020-10-31T23:59:59Z")
    },
    "status": "absent"
  });
  
  db.tasks.find({
    "submission_date": {
      $gte: ISODate("2020-10-15T00:00:00Z"),
      $lte: ISODate("2020-10-31T23:59:59Z")
    },
    "submitted": false
  });
  