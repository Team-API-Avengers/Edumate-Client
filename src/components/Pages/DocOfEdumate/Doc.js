import React from "react";

const Doc = () => {
  return (
    <div>
      <div className="purpose">
        <h1>
          Edumate connects students with qualified and experienced tutors who
          specialize in various subjects. The main goal of Edumate is to offer a
          convenient and effective solution for students who require additional
          assistance with their studies. By utilizing Edumate, students can
          access teachers who can help them reach their academic objectives. The
          platform aims to facilitate the connection between students and
          tutors, ensuring that students receive the necessary support to
          succeed in their studies.
        </h1>
      </div>

      <div className="functionality">
        <p>
          Location-based Search: Users can enter their desired location, such as
          a city or a zip code, to find teachers available in that particular
          area. The website will then display a list of teachers who are located
          within or near the specified location.
          <br />
          Name-based Search: Users can directly enter the name of a specific
          teacher they are interested in. The website will search its database
          and display the matching results, providing information about the
          teacher's profile and expertise.
          <br />
          Title-based Search: Users can search for teachers based on their
          professional title or specialization. For example, if a user is
          specifically looking for a math teacher or an English literature
          instructor, they can enter those keywords in the search bar. The
          website will present a list of teachers who specialize in the
          specified subject or hold the requested title.
        </p>
        <br />
        <p>
          Background Filtering: Users can apply filters to search for teachers
          with specific backgrounds, qualifications, or expertise. These filters
          could include educational background, degrees, certifications,
          subjects taught, teaching experience, or any other relevant criteria.
          By selecting the desired filters, users can view a list of teachers
          who match those specific requirements.
          <br />
          Location Filtering: Users can also filter teachers based on their
          location. This can be done by entering a city, state, or postal code
          to find teachers in a particular area. The website will then display a
          list of teachers available in or near the specified location.
        </p>
      </div>
    </div>
  );
};

export default Doc;
