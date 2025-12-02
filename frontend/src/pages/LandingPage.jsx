import LandingNavbar from './components/LandingNavbar';
import Hero from './components/Hero';
import AboutApp from './components/AboutApp';
import ProjectOverview from './components/ProjectOverview';
import TechStack from './components/TechStack';
import DevelopmentHighlights from './components/DevelopmentHighlights';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

const LandingPage = () => {
    return (
        <div className="bg-gray-900 min-h-screen">
            <LandingNavbar />
            <Hero />
            <AboutApp />
            <ProjectOverview />
            <TechStack />
            <DevelopmentHighlights />
            <AboutMe />
            <Footer />
        </div>
    );
};

export default LandingPage;
