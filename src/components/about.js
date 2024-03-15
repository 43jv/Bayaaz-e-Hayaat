import React from "react";

function About() {
  return (
    <div>
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <div>
                    <h1 style={{ marginBottom: "10vh" }}>About Us</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id="about">
        <div className="container">
          <div className="row">
            <div style={{ marginTop: "2vh" }}>
              <div>
                <p style={{ textIndent: "30px" }}>
                  "Bayāz" in Urdu refers to a notebook or diary in which people
                  write their favourite poetry or other memorable ideas and
                  words. Owning and maintaining a Bayāz was once considered a
                  mark of education and cultivation, for without a thorough
                  knowledge of poetry, no person was deemed to be truly educated
                  or cultured. Over time, as middle-class women acquired
                  education, a Bayāz or notebook acquired new functionalities
                  that represented the different roles women had to
                  simultaneously juggle. Hyderabadi writer Zeenath Sajida
                  (1924-2009) has eloquently described how a Bayāz is, in fact,
                  a metaphor for the reality of women’s lives, for squeezed
                  between lists of expenses and other domestic priorities – are
                  their dreams and aspirations, writings and plans, hurriedly
                  scribbled in the margins, recorded on the edges of time. Bayāz
                  e-Hayāt, or the “Notebook of Life,” aims to collect, digitize,
                  preserve, and exhibit in different media the private and
                  literary papers of writers, scholars, and intellectuals
                  working in different languages in Hyderabad.
                </p>
                <h2>Contributors</h2>
                <p>
                  <li>
                    {" "}
                    <strong>Dr. Nazia Akhtar </strong> is the principal
                    investigator for this project. An Assistant Professor at
                    IIIT Hyderabad, she has been working on the literature and
                    culture of Hyderabad for more than a decade and has written
                    a book on this theme, titled{" "}
                    <i>
                      Bibi's Room: Hyderabadi Women and Twentieth-Century Urdu
                      Prose{" "}
                    </i>
                    (2022). She also translates Urdu writings from Hyderabad
                    into English.
                  </li>
                  <li>
                    {" "}
                    <strong>Dr. Kamal Karlapalem </strong> s a Professor and
                    applied computer scientist at IIIT Hyderabad. He has broad
                    research interests: from conceptual modeling, workflow
                    systems to distributed database systems and performance,
                    from clustering and classification algorithms in data mining
                    to information extraction from actionable texts, from high
                    dimensional intensive data visualization to visual query
                    exploration, and from multi-agent systems-based simulation
                    to multi-robotic solutions. He has an interest in
                    literature, culture, and pedagogy, and has invested time and
                    technical expertise to facilitate the creation of this
                    archive.
                  </li>
                  <li>
                    {" "}
                    <strong> Ramsha Farhan </strong> is a Research Assistant
                    working on this project. With an MA degree in History from
                    SOAS (London), she is responsible for digitizing handwritten
                    and out-of-print texts and creating meta-data associated
                    with writers and texts. She also works on the larger archive
                    and has helped locate rare or obscure texts for the project
                    catalogue.
                  </li>
                  <li>
                    {" "}
                    <strong> Jahnavi Voruganti </strong> is B.Tech student
                    pursuing Computer Science Engineering at IIIT Hyderabad.
                    Having spent her childhood in Hyderabad, she has a deep
                    connection to the city and its culture. She is responsible
                    for developing the technical aspects of the website.
                  </li>
                  <li>
                    {" "}
                    <strong> Paridhi Prasad </strong> is a B.Tech student
                    specializing in Electronics and Communication Engineering at
                    IIIT Hyderabad. Her interest in this project is rooted in
                    her deep fascination for literature and art. She has also
                    contributed to the technical development of the website.{" "}
                  </li>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
<div className="list-style"></div>;
