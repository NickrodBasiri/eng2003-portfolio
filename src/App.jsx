import React from "react";

import Card from "./components/Card";
import Button from "./components/Button";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="space-y-16 w-full flex flex-col items-center">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">Nickrod Basiri's Communication Portfolio</h1>
          <p className="text-lg text-gray-600">Aspiring Software Engineer | ENG2003W24</p>
            <Button href="https://linkedin.com/in/nickrodbasiri">LinkedIn Profile</Button>
        </header>

        {/* who am i */}
        <section className="w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Who Am I?</h2>
          <Card>
            <p>
              Hi! My name is Nickrod, and I'm a second-year student studying Software Engineering at York University. Outside of engineering, I enjoy coding personal projects and rock climbing.
              <br /><br />
              I'm currently developing a roguelike video game with a friend. This is proving to be a great exercise in communication and teamwork to make sure we have the same vision for the game.
              <br /><br />
              As for climbing, it reminds me to take a step back and analyse things. Like a boulder problem, this approach helps in my day to day to keep me focused and on track.
            </p>
          </Card>
        </section>

        {/* project showcase */}
        <section className="w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Showcase</h2>
          <div className="grid gap-6 justify-items-center">
            <Card
              title="Technical Report: Open-Source AI"
              pdfUrl="technical-report.pdf"
            >
              <p>
                This report reviews the ethical implications of open-source artificial intelligence, highlighting the DeepSeek-R1 model as a case study. I chose this piece as I found it to be the culmination of all my hard work in ENG2003. It allowed me to demonstrate my communication skills by exploring a relevant and controversial topic relating to the field I hope to pursue. The report reflects my ability to present balanced arguments while maintaining a professional tone, presenting arguments from both sides. It represents strong written communication skills that I learned throughout my time in ENG2003.
              </p>
            </Card>

            <Card
              title="Artificial Intelligence Brochure"
              pdfUrl="/handout.pdf"
            >
              <p>
                For this project, I made a handout outlining the importance of open-source artificial intelligence. It goes over various reasons for why it would benefit all, and went over them in the brochure. I selected this as it was a project that forced me to explain complex concepts in simpler terms. It reflects my growth as a communicator by demonstrating how to combine visual elements with persuasive writing. This handout pushed me to consider audience engagement and visual communication strategies, allowing me to present my ideas clearly and effectively.
              </p>
            </Card>

            <Card
              title="Group Presentation: AI's Future Impact on Employment"
              pdfUrl="https://www.youtube.com/watch?v=mkX0Sa9gIvw"
            >
              <p>
              This presentation explored the impact of artificial intelligence on the future of employment, addressing various risks like job displacement while also proposing solutions. I chose this piece as it was an example of verbal communication, rather than written. It forced me to effectively organize and communicate complex economic and technological topics to the audience clearly and concisely. It also helped me build valuable team communication skills while working in a group. It reflects my growth as a communicator by demonstrating my public speaking skills.
              </p>
            </Card>

            <Card
              title="Pickle - Emergency Response"
              pdfUrl="https://github.com/NickrodBasiri/DeltahacksXI_Pickle"
            >
              <p>
              In a Pickle? Pickle is an emergency response application that utilizes SMS and AI to ensure individuals remain connected and secure in times of crisis. It facilitates sharing of locations, provides survival advice, and offers tools for emergency responders, all without needing internet access. Its creative design guarantees accessibility and dependability when it matters most. Pickle was built using React, Flask, MongoDB, Auto0, and Cohere AI. It won 3rd place at DeltaHacksXI for best use of Cohere AI.
              </p>
            </Card>
          </div>
        </section>

        {/* reflections */}
        <section className="w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Reflections</h2>
          <div className="space-y-6 text-gray-800 max-w-2xl mx-auto">
            <div>
              <h3 className="font-bold text-xl mb-2">A. Course Reflection</h3>
              <p>
                My experience with ENG2003 was rewarding and exceeded my expectations. Going into the course, I was expecting something similar to the previous ENG courses, which I wasn't the biggest fan of. I expected a typical writing-focused course, where I'd do a few projects I didn't care about and get an okay grade. I was surprised by how interesting and genuinely relevant a lot of the content ended up being.
                <br/><br />
                I particularly enjoyed the weekly Kahoots. I found it to be a really engaging way to test my knowledge in a fun and competitive manner. It was cool to be able to see what I knew in real time.
                <br /><br />
                Another area I thought was particularly useful was the cover letter assignment and associated lectures. Seeing as it was nearing the time I had to start applying for jobs, the skills I learned I actually used when applying for real positions. I always enjoy when something I learn in a course is relevant to my life outside of school.
                <br /><br />
                As seen in my showcases, I really enjoyed the various discussions on AI throughout the course, as well as the implementation of the AI disclosure. None of my other courses had a concept like that, making it somewhat okay to use AI so long as you disclose it. I thought it was an intuitive way to get students to be honest and accountable about their work and how they produced their projects.
                <br /><br />
                Overall, my experience in ENG2003 was a lot better than I had initially imagined. I'm glad that I learned valuable skills that will be beneficial in my future career.
              </p>

            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">B. Communication Development</h3>
              <p>
                Throughout ENG2003, my capacity for professional communication improved across multiple areas. While I wouldn't say I was a bad communicator at the beginning of the course, I have improved significantly. By the end, I was more confident in both my written and verbal communication.
                <br /><br />
                An area with major improvement was my ability to structure information in a clear and logical way. I saw major improvement with this while writing my technical report. Initially, it was kind of a mess, with different ideas mixed and jumbled together in an honestly sloppy report. Using what I had learned throughout the course, I improved on my writing for the final draft allowing for my writing to flow more coherently.
                <br /><br />
                My oral communication is an area in which I can improve. While I think my group presentation went well, it took me some practice to get comfortable talking to the camera. I find that I will speak too quickly under pressure, or lose my train of thought.
                <br /><br />
                The handout allowed me to use visual communication skills that I hadn't needed to use for a long time. It was my first time in post-secondary education making a communicative piece that needed to be visually appealing, and I think I did a good job.
                <br /><br />
                ENG2003 has definitely lead to an improvement in my engineering communication. I'm more aware of my audience, tone, and structure. I keep concepts like the 7 C's and axioms of communication in mind to make sure my writing is clear and impactful. These skills will assuredly me in my professional future.
              </p>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="text-center text-sm text-gray-500">
          <p>&copy; 2025 Nickrod Basiri. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
