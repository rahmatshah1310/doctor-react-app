import Profile from "@assets/images/Profile.png";

export const services = [
  {
    name: "Dr.Zakir Ali",
    title: "Cognitive Behavioral Therapy (CBT)",
    image: Profile,
    desc: "CBT helps you identify and change negative thought patterns and behaviors that affect your mental well-being.",
  },
  {
    name: "Dr.Inam Ullah",
    title: "Prenatal & Postnatal Mental Health",
    image: Profile,
    desc: "Supporting mothers with emotional well-being during and after pregnancy through therapy and counseling.",
  },
  {
    name: "Dr.Habbib Khan",
    title: "Anxiety & Stress Management",
    image: Profile,
    desc: "Learn healthy coping mechanisms to reduce stress, manage anxiety, and regain emotional control.",
  },
  {
    name: "Akhtar Shah",
    title: "Prenatal & Postnatal Mental Health",
    image: Profile,
    desc: "Supporting mothers with emotional well-being during and after pregnancy through therapy and counseling.",
  },
];


export const BookingContent = [
  {
    title: "ECG (Electrocardiogram)",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    title: "EEG (Electroencephalogram)",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
  {
    title: "Outdoor/Indoor Services",
    content:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
  },
];




// Add this constant for form fields
export const AppointmentFields = [
  {
    name: "fullName",
    label: "YOUR FULL NAME",
    type: "text",
    placeholder: "Your Full Name"
  },
  {
    name: "email",
    label: "EMAIL ADDRESS",
    type: "email",
    placeholder: "Email"
  },
  {
    name: "phone",
    label: "PHONE NUMBER",
    type: "text",
    placeholder: "Your Phone Number"
  },
  {
    name: "appointmentDate",
    label: "APPOINTMENT DATE",
    type: "text",
    placeholder: "Appointment Date"
  },
  {
    name: "appointmentTime",
    label: "APPOINTMENT TIME",
    type: "text",
    placeholder: "Appointment Time"
  }
];

// Add this constant for slides
export const HomeSlides = [
  {
    id: 1,
    title: "YOUR MENTAL WELLNESS IS OUR PRIORITY",
    highlight: "PRIORITY",
    type: "title"
  },
  {
    id: 2,
    content: "Professional support for your mental health journey",
    type: "content"
  },
  {
    id: 3,
    title: "YOUR MENTAL WELLNESS IS OUR PRIORITY",
    highlight: "PRIORITY",
    type: "search"
  }
];

export const serviceOptions = [
  { label: "Dr. Sarah Thompson – CBT", value: "cbt" },
  { label: "Dr. Omar Riaz – Anxiety Therapy", value: "anxiety" },
  { label: "Dr. Aisha Malik – Women's Mental Health", value: "women" },
];

<section className="py-20 bg-gray-50 w-full">
  <div className="container mx-auto px-4">
    <div className="flex justify-between flex-wrap -mx-4">
      {/* Appointment Form Section */}

      {/* Services Section */}
    </div>
  </div>
</section>;
