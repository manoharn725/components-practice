import Accordion from "../components/Accordion";

function AccordionPage() {
  const propsItems = [
    {
      id: "adsa",
      label: "Html description ?",
      content:
        "HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages. HTML describes the structure of a Web page. HTML consists of a series of elements. HTML elements tell the browser how to display the content.",
    },
    {
      id: "aawef",
      label: "Css description ?",
      content:
        "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.",
    },
    {
      id: "efawe",
      label: "Javascript description ?",
      content:
        "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
    },
    {
      id: "eger",
      label: "React description ?",
      content:
        "React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.",
    },
  ];



  return (
    <div className="bg-red-100 p-3 my-2">Accordion
        <Accordion items={propsItems} />
    </div>
  )
}
export default AccordionPage;
