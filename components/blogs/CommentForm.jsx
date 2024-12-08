"use client";

export default function CommentForm() {
  return (
    <div className="comments-form-wrap">
      <h3>Leave A Comment</h3>
      <div className="comments-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="row">
            <div className="col-md-6 col-12">
              <input required type="text" placeholder="Name" />
            </div>
            <div className="col-md-6 col-12">
              <input required type="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <input required type="tel" placeholder="Phone" />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Write a Comment"
                defaultValue={""}
                required
              />
            </div>
            <div className="col-12">
              <input type="submit" defaultValue="Post Comment" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
