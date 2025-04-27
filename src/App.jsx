import React, { useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { motion } from "framer-motion";
import './index.css';

const details = {
  "1957": {
    text: "URSS lansează Sputnik ➝ SUA creează DARPA pentru a avansa tehnologia.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Sputnik_1.jpg",
    link: "https://en.wikipedia.org/wiki/Sputnik_1",
    video: "https://www.youtube.com/embed/q3oHmVhviO8"
  },
  "1969": {
    text: "ARPANET conectează 4 universități americane – primul pas real spre Internet.",
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Arpanet_logical_map_1977.png",
    link: "https://en.wikipedia.org/wiki/ARPANET",
    video: "https://www.youtube.com/embed/5v6sL4XFGFQ"
  },
  "1972": {
    text: "Ray Tomlinson trimite primul email. Introduce simbolul @.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Email_Envelope.png",
    link: "https://en.wikipedia.org/wiki/Ray_Tomlinson",
    video: null
  },
  "1974": {
    text: "Vint Cerf și Bob Kahn propun TCP/IP – baza Internetului de azi.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Vint_Cerf.jpg",
    link: "https://en.wikipedia.org/wiki/Vint_Cerf",
    video: null
  },
  "1983": {
    text: "TCP/IP devine protocolul standard. Internetul „oficial” se naște.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Internet_map_1024.jpg",
    link: "https://en.wikipedia.org/wiki/Internet_protocol_suite",
    video: null
  },
  "1989": {
    text: "Tim Berners-Lee propune WWW la CERN. Conceptul de pagini web apare.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Tim_Berners-Lee_CP_2.jpg",
    link: "https://en.wikipedia.org/wiki/Tim_Berners-Lee",
    video: "https://www.youtube.com/embed/J8hzJxb0rpc"
  },
  "1993": {
    text: "Mosaic – primul browser grafic ➝ acces facil pentru public.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/NCSA_Mosaic_browser_screenshot.png",
    link: "https://en.wikipedia.org/wiki/Mosaic_(web_browser)",
    video: null
  },
  "1998": {
    text: "Google este fondat și revoluționează căutarea online.",
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    link: "https://en.wikipedia.org/wiki/Google",
    video: null
  },
  "2004": {
    text: "Mark Zuckerberg lansează Facebook dintr-o cameră de cămin.",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    link: "https://en.wikipedia.org/wiki/Facebook",
    video: null
  },
  "2007": {
    text: "Apple lansează iPhone. Începe revoluția mobile.",
    image: "https://upload.wikimedia.org/wikipedia/commons/f/fa/IPhone_Original.svg",
    link: "https://en.wikipedia.org/wiki/IPhone_(1st_generation)",
    video: "https://www.youtube.com/embed/MnrJzXM7a6o"
  },
  "2016": {
    text: "Boom AI și Big Data ➝ recunoaștere vocală, automatizări.",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Artificial_intelligence_2017_logo.svg",
    link: "https://en.wikipedia.org/wiki/Artificial_intelligence",
    video: null
  },
  "2023": {
    text: "Web 3.0, blockchain, metavers, rețele descentralizate.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Web3_logo.svg",
    link: "https://en.wikipedia.org/wiki/Web3",
    video: null
  }
};

const NodeCard = ({ title, children, onClick }) => (
  <motion.div whileHover={{ scale: 1.05 }} className="p-2" onClick={onClick}>
    <div className="bg-white/90 backdrop-blur-md shadow-2xl p-4 rounded-2xl border w-64 cursor-pointer">
      <h3 className="text-lg font-semibold text-center mb-2 text-indigo-700">{title}</h3>
      <p className="text-sm text-gray-700 text-center">{children}</p>
    </div>
  </motion.div>
);

export default function EvolutiaInternetului() {
  const [selected, setSelected] = useState(null);

  const handleClick = (year) => {
    setSelected(details[year]);
  };

  return (
    <div className="p-10 overflow-x-auto min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100">

      <Tree
        lineWidth={'2px'}
        lineColor={'#7C3AED'}
        lineBorderRadius={'10px'}
        label={<NodeCard title="Evoluția Internetului">1957–2025</NodeCard>}
      >
        <TreeNode label={<NodeCard title="1957–1969">Rădăcini</NodeCard>}>
          <TreeNode label={<NodeCard title="1957" onClick={() => handleClick("1957")}>Sputnik & DARPA</NodeCard>} />
          <TreeNode label={<NodeCard title="1969" onClick={() => handleClick("1969")}>ARPANET</NodeCard>} />
        </TreeNode>
        <TreeNode label={<NodeCard title="1970–1980">Fundamente</NodeCard>}>
          <TreeNode label={<NodeCard title="1972" onClick={() => handleClick("1972")}>Email</NodeCard>} />
          <TreeNode label={<NodeCard title="1974" onClick={() => handleClick("1974")}>TCP/IP propus</NodeCard>} />
        </TreeNode>
        <TreeNode label={<NodeCard title="1981–1990">Expansiune</NodeCard>}>
          <TreeNode label={<NodeCard title="1983" onClick={() => handleClick("1983")}>TCP/IP oficial</NodeCard>} />
          <TreeNode label={<NodeCard title="1989" onClick={() => handleClick("1989")}>WWW propus</NodeCard>} />
        </TreeNode>
        <TreeNode label={<NodeCard title="1991–2000">Explozia Web</NodeCard>}>
          <TreeNode label={<NodeCard title="1993" onClick={() => handleClick("1993")}>Mosaic Browser</NodeCard>} />
          <TreeNode label={<NodeCard title="1998" onClick={() => handleClick("1998")}>Google</NodeCard>} />
        </TreeNode>
        <TreeNode label={<NodeCard title="2001–2010">Web 2.0</NodeCard>}>
          <TreeNode label={<NodeCard title="2004" onClick={() => handleClick("2004")}>Facebook</NodeCard>} />
          <TreeNode label={<NodeCard title="2007" onClick={() => handleClick("2007")}>iPhone</NodeCard>} />
        </TreeNode>
        <TreeNode label={<NodeCard title="2011–2025">Digital Avansat</NodeCard>}>
          <TreeNode label={<NodeCard title="2016" onClick={() => handleClick("2016")}>AI & Big Data</NodeCard>} />
          <TreeNode label={<NodeCard title="2023" onClick={() => handleClick("2023")}>Web 3.0</NodeCard>} />
        </TreeNode>
      </Tree>

      {selected && (
        <div className="mt-6 max-w-2xl mx-auto p-6 bg-white/70 backdrop-blur-md border border-purple-300 rounded-xl shadow space-y-4">
          <h4 className="text-xl font-bold text-purple-700">Detalii:</h4>
          <p className="text-gray-700 text-sm">{selected.text}</p>
          {selected.image && (
            <img src={selected.image} alt="eveniment" className="rounded-xl border max-w-full" />
          )}
          {selected.link && (
            <a href={selected.link} target="_blank" rel="noopener noreferrer" className="text-purple-600 underline text-sm">Citește mai mult</a>
          )}
          {selected.video && (
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-xl"
                src={selected.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
