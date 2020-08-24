import React, {Component} from 'react';
import Accordion from './Accordion.js';
import './Coursework.css';

class Coursework extends Component {
    state = {showCSOnly: false};

    handleChange = (event) => this.setState({showCSOnly: event.target.checked});

    render() {
        return(
            <div className="coursework">
                <p>Here is a list of courses I have taken and am taking at Lehigh:</p>
                
                <label className="checkbox">
                    <span>Show only computer science courses</span>
                    <Checkbox checked={this.state.checked} onChange={this.handleChange}/>
                </label>

                <h3>Fall 2020 (in progress)</h3>
                <Accordion title={courseTitles[0]} content={courseDescriptions[0]}/>
                <Accordion title={courseTitles[1]} content={courseDescriptions[1]}/>
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[2]} content={courseDescriptions[2]}/>}
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[3]} content={courseDescriptions[3]}/>}
                <Accordion title={courseTitles[4]} content={courseDescriptions[4]}/>

                <h3>Spring 2020</h3>
                <Accordion title={courseTitles[5]} content={courseDescriptions[5]}/>
                <Accordion title={courseTitles[6]} content={courseDescriptions[6]}/>
                <Accordion title={courseTitles[7]} content={courseDescriptions[7]}/>
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[8]} content={courseDescriptions[8]}/>}
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[9]} content={courseDescriptions[9]}/>}

                <h3>Fall 2019</h3>
                <Accordion title={courseTitles[10]} content={courseDescriptions[10]}/>
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[11]} content={courseDescriptions[11]}/>}
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[12]} content={courseDescriptions[12]}/>}
                <Accordion title={courseTitles[13]} content={courseDescriptions[13]}/>
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[14]} content={courseDescriptions[14]}/>}

                <h3>Spring 2019</h3>
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[15]} content={courseDescriptions[15]}/>}
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[16]} content={courseDescriptions[16]}/>}
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[17]} content={courseDescriptions[17]}/>}
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[18]} content={courseDescriptions[18]}/>}
                <Accordion title={courseTitles[19]} content={courseDescriptions[19]}/>

                <h3>Fall 2018</h3>
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[20]} content={courseDescriptions[20]}/>}
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[21]} content={courseDescriptions[21]}/>}
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[22]} content={courseDescriptions[22]}/>}
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[23]} content={courseDescriptions[23]}/>}
                {this.state.showCSOnly ? null : <Accordion title={courseTitles[24]} content={courseDescriptions[24]}/>}
                <Accordion title={courseTitles[25]} content={courseDescriptions[25]}/>

                <p>Course descriptions via <a href="http://catalog.lehigh.edu/azindex/" target="_blank" rel="noopener noreferrer">Lehigh University Catalog</a></p>
            </div>
        )
    }
}

export default Coursework;

const Checkbox = (props) => (<input type="checkbox" {...props} />);

const courseTitles = [
    "Blockchain Algorithms and Systems",
    "Design and Analysis of Algorithms",
    "Intermediate Microeconomic Analysis",
    "Legal Enivronment of Business",
    "Software Engineering",

    "Computer Applications in Business",
    "Database Systems and Applications",
    "Foundations of Discrete Structure and Algorithms",
    "Introduction to Managerial Accounting",
    "Introduction to Rocks and Minerals",

    "Computer Organization and Architecture",
    "Human Evolution and Prehistory",
    "Introduction to Financial Accounting",
    "Programming Languages",
    "Statistical Methods",

    "Calculus II",
    "Emerson, Thoreau, and Beyond: an Introduction to Philosophy",
    "Money, Banking, and Financial Markets",
    "Principles of Marketing",
    "Systems Software",

    "Calculus I",
    "Exploring Earth",
    "Introduction to Business in a Global Environment",
    "Introduction to Planet Earth",
    "Principles of Economics",
    "Programming and Data Structures"
];

const courseDescriptions = [
    "\"After an introduction to the concepts of cryptocurrencies and blockchains, the course will focus on the data structures, algorithms, and mathematics that make blockchains secure, tamper-resistant, and structured in a highly distributed manner.\"",
    "\"Algorithms for searching, sorting, manipulating graphs and trees, finding shortest paths and minimum spanning trees, scheduling tasks, etc.: proofs of their correctness and analysis of their asymptotic runtime and memory demands. Designing algorithms: recursion, divide-and-conquer, greediness, dynamic programming. Limits on algorithm efficiency using elementary NP-completeness theory.\"",
    "\"The application of economic analysis to managerial and public policy decision-making.\"",
    "\"This course examines the legal relationships between business and government, business and society, and the individual and society. A significant focus of the course is on the structure of the U.S. legal system, the role of the courts in the legal system, and contract law as the principal mechanism for the private allocation of resources and risk allocation. The course also focuses on business ethics with particular emphasis on corporate social responsibility.\"",
    "\"The software lifecycle; lifecycle models; software planning; testing; specification methods; maintenance. Emphasis on team work and large-scale software systems, including oral presentations and written reports.\"",

    "\"Application of computer technology to business problems. Transaction processing systems that support the revenue, conversion, and expenditure cycles of manufacturing, service, and retail business organizations. Topics include process modeling, data modeling, internal controls, corporate IT governance, IT audit techniques, SAP and application of Generalized Audit Software.\"",
    "\"Design of large databases: Integration of databases and applications using SQL and JDBC; transaction processing; performance tuning; data mining and data warehouses.\"",
    "\"Basic representations used in algorithms: propositional and predicate logic, set operations and functions, relations and their representations, matrices and their representations, graphs and their representations, trees and their representations. Basic formalizations for proving algorithm correctness: logical consequences, induction, structural induction. Basic formalizations for algorithm analysis: counting, pigeonhole principle, permutations.\"",
    "\"An introduction to internal accounting information for all levels of management. Topics include cost flow in a manufacturing operation; planning, evaluating and controlling through budgeting and standard costing; and decision-making using cost-volume-profit analysis, direct costing, and relevant costs.\"",
    "\"Hand-specimen identification of the major mineral groups and rock types. Atomic structure of minerals; relationship of mineral structure to chemical and physical properties. Placement of igneous, sedimentary, and metamorphic rocks into a plate tectonics context. Introduction to optical mineralogy and x-ray diffraction techniques. Lectures, laboratories, field trips.\"",

    "\"Interaction between low-level computer architectural properties and high-level program behaviors: instruction set design; digital logic and assembly language; processor organization; the memory hierarchy; multicore and GPU architectures; and processor interrupt/exception models.\"",
    "\"Introductory biological anthropology and prehistory. Adaptive functions of human culture and its relation to biological evolution. Mechanisms of evolution, non-human primate morphology and behavior, hominid fossil record, cultural beginnings, and survey of world prehistory.\"",
    "\"The organization, measurement and interpretation of economic information. Introduction to accounting theory, concepts and principles, the accounting cycle, information processing, and financial statements. Exposure to controversial issues concerning income determination and valuation.\"",
    "\"Use, structure and implementation of several programming languages, including Rust, Haskell, Prolog, etc.\"",
    "\"Descriptive statistics, probability and probability distributions, sampling, estimation, hypothesis testing, chi-square tests, simple regression and correlation.\"",

    "\"Applications of integration; techniques of integration; separable differential equations; infinite sequences and series; Taylor's Theorem and other approximations; curves and vectors in the plane.\"",
    "\"The literary power of Emerson and Thoreau, of Frederick Douglass, Margaret Fuller and Walt Whitman, is widely recognized, but their philosophical vocation is still repressed. This introduction to philosophy will be through the doors offered by these American authors and their impact on other prominent thinkers.\"",
    "\"The nature and functions of money. Global money and financial markets. The role of commercial and central banks. Effects of the interest rate, exchange rate, and the money supply on the economy. Examination and evaluation of current and past monetary policies.\"",
    "\"The purpose of this course is to give an overview of the entire marketing function. The objective is to take a broad-based approach to expose students to the meaning of marketing, the terminology of marketing, the activities involved in marketing, how managers make and implement decisions in marketing, and how they evaluate the results. The role of marketing in the broader society will also be discussed. At the end of this course, students will be able to understand the meaning of the marketing concept, various marketing terminologies, how firms develop and evaluate marketing strategies related to product, place, price, and promotions, how marketing strategies are related to other strategies of the firm, and what internal and external factors influence the marketing decisions.\"",
    "\"Advanced programming and data structures, including dynamic structures, memory allocation, data organization, symbol tables, hash tables, B-trees, data files. Object-oriented design and implementation of simple assemblers, loaders, interpreters, compilers, and translators. Practical methods for implementing medium-scale programs.\"",

    "\"Functions and graphs; limits and continuity; derivative, differential, and applications; indefinite and definite integrals; trigonometric, logarithmic, exponential, and hyperbolic functions.\"",
    "\"Laboratory course in methods, data acquisition, data analyses and scientific communication relevant to Earth and Environmental Sciences. Building on the framework of the “Earth Science Literacy Initiative” the course introduces students to the foundations of the scientific method, the basic concepts of the Earth systems, and the influence and interaction of the natural world in everyday life. Topics include Hazards, resources, anthropogenic forcing and impacts, biogeochemical cycles and sustainability.\"",
    "\"This course orients students in the College of Business to the study of business and to the college's expectations of undergraduates. Different types of business organizations and their goals are introduced, including overviews of the functional areas of business, their contributions to organizations, and their related careers. Students will begin to identify their professional interests, understand the wider context of business, and be exposed to the College of Business programs and resources available to support their academic and professional success.\"",
    "\"Processes within the Earth and dynamic interactions between the solid earth, the atmosphere, and the oceans.\"",
    "\"A one-semester course in the principles of economics. General topics covered are: supply and demand; pricing and production decisions of firms; the role of government in the economy; the determination of national income; money and banking; monetary and fiscal policy; and government finance.\"",
    "\"Algorithmic design and implementation in a high level, object oriented language, such as Java. Classes, subclasses, recursion, searching, sorting, linked lists, trees, stacks, queues.\""
];