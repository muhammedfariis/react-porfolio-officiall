import mongoose from "mongoose";

const contactSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      trim: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Phone: {
      type: Number,
      trim: true,
      required: true,
    },

    JobEnquiry: {
      type: String,
      required: true,
      enum: [
        "job_enquiry",
        "collaborations",
        "project_enquiry",
        "freelance",
        "cunsultants",
      ],
    },

    Textarea: {
      type: String,
    },
  },
  { timestamps: true },
);

const contact = mongoose.model("Contacts", contactSchema);

export default contact;
