import { createBrowserRouter } from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import NotFound from "@/pages/404/NotFound";

import Home from "@/pages/Home/Home";

// About sub-pages
import VisionMission from "@/pages/About/VisionMission";
import History from "@/pages/About/History";
import OfficeBearers from "@/pages/About/OfficeBearers";
import ExecutiveCommittee from "@/pages/About/ExecutiveCommittee";
import Constitution from "@/pages/About/Constitution";
import AffiliatedBodies from "@/pages/About/AffiliatedBodies";
import InternationalAffiliations from "@/pages/About/InternationalAffiliations";

// News & Media sub-pages
import LatestNews from "@/pages/NewsMedia/LatestNews";
import PressReleases from "@/pages/NewsMedia/PressReleases";
import Announcements from "@/pages/NewsMedia/Announcements";
import MediaCoverage from "@/pages/NewsMedia/MediaCoverage";
import NewsletterArchive from "@/pages/NewsMedia/NewsletterArchive";

// Teams sub-pages
import NationalTeams from "@/pages/Teams/NationalTeams";
import PlayerProfile from "@/pages/Teams/PlayerProfile";
import CoachStaffProfile from "@/pages/Teams/CoachStaffProfile";
import SelectionCriteria from "@/pages/Teams/SelectionCriteria";

// Events sub-pages
import EventCalendar from "@/pages/Events/EventCalendar";
import UpcomingEvents from "@/pages/Events/UpcomingEvents";
import ResultsRankings from "@/pages/Events/ResultsRankings";
import Fixtures from "@/pages/Events/Fixtures";
import PastTournaments from "@/pages/Events/PastTournaments";

// Development sub-pages
import CoachingPrograms from "@/pages/Development/CoachingPrograms";
import RefereeingPrograms from "@/pages/Development/RefereeingPrograms";
import CoachingCertification from "@/pages/Development/CoachingCertification";
import RefereeCertification from "@/pages/Development/RefereeCertification";
import GrassrootsDevelopment from "@/pages/Development/GrassrootsDevelopment";
import TalentIdentification from "@/pages/Development/TalentIdentification";

// Resources sub-pages
import FormsApplications from "@/pages/Resources/FormsApplications";
import PoliciesGuidelines from "@/pages/Resources/PoliciesGuidelines";
import RuleBooks from "@/pages/Resources/RuleBooks";
import Downloads from "@/pages/Resources/Downloads";

// Gallery sub-pages
import Gallery from "@/pages/Gallery/Gallery";
import Photos from "@/pages/Gallery/Photos";
import Videos from "@/pages/Gallery/Videos";
import EventHighlights from "@/pages/Gallery/EventHighlights";

// Get Involved sub-pages
import Volunteer from "@/pages/GetInvolved/Volunteer";
import Membership from "@/pages/GetInvolved/Membership";
import Sponsorship from "@/pages/GetInvolved/Sponsorship";
import Donations from "@/pages/GetInvolved/Donations";

// Contact page
import Contact from "@/pages/Contact/Contact";
import ContactForm from "@/pages/Contact/ContactForm";
import OfficeDetails from "@/pages/Contact/OfficeDetails";
import SocialMediaLinks from "@/pages/Contact/SocialMediaLinks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },

      {
        path: "about",
        children: [
          { index: true, element: <VisionMission /> },
          { path: "vision-mission", element: <VisionMission /> },
          { path: "history", element: <History /> },
          { path: "office-bearers", element: <OfficeBearers /> },
          { path: "executive-committee", element: <ExecutiveCommittee /> },
          { path: "constitution", element: <Constitution /> },
          { path: "affiliated-bodies", element: <AffiliatedBodies /> },
          {
            path: "international-affiliations",
            element: <InternationalAffiliations />,
          },
        ],
      },

      {
        path: "news-media",
        children: [
          { index: true, element: <LatestNews /> },
          { path: "latest-news", element: <LatestNews /> },
          { path: "press-releases", element: <PressReleases /> },
          { path: "announcements", element: <Announcements /> },
          { path: "media-coverage", element: <MediaCoverage /> },
          { path: "newsletter-archive", element: <NewsletterArchive /> },
        ],
      },

      {
        path: "teams",
        children: [
          { index: true, element: <NationalTeams /> },
          { path: "national-teams", element: <NationalTeams /> },
          { path: "player-profiles/:id", element: <PlayerProfile /> },
          { path: "coach-staff-profiles/:id", element: <CoachStaffProfile /> },
          { path: "selection-criteria", element: <SelectionCriteria /> },
        ],
      },

      {
        path: "events",
        children: [
          { index: true, element: <EventCalendar /> },
          { path: "calendar", element: <EventCalendar /> },
          { path: "upcoming", element: <UpcomingEvents /> },
          { path: "results-rankings", element: <ResultsRankings /> },
          { path: "fixtures", element: <Fixtures /> },
          { path: "past-tournaments", element: <PastTournaments /> },
        ],
      },

      {
        path: "development",
        children: [
          { index: true, element: <CoachingPrograms /> },
          { path: "coaching-programs", element: <CoachingPrograms /> },
          { path: "refereeing-programs", element: <RefereeingPrograms /> },
          {
            path: "coaching-certification",
            element: <CoachingCertification />,
          },
          { path: "referee-certification", element: <RefereeCertification /> },
          {
            path: "grassroots-development",
            element: <GrassrootsDevelopment />,
          },
          { path: "talent-identification", element: <TalentIdentification /> },
        ],
      },

      {
        path: "resources",
        children: [
          { index: true, element: <FormsApplications /> },
          { path: "forms-applications", element: <FormsApplications /> },
          { path: "policies-guidelines", element: <PoliciesGuidelines /> },
          { path: "rule-books", element: <RuleBooks /> },
          { path: "downloads", element: <Downloads /> },
        ],
      },

      {
        path: "gallery",
        children: [
          { index: true, element: <Gallery /> },
          { path: "photos", element: <Photos /> },
          { path: "videos", element: <Videos /> },
          { path: "event-highlights", element: <EventHighlights /> },
        ],
      },

      {
        path: "get-involved",
        children: [
          { index: true, element: <Volunteer /> },
          { path: "volunteer", element: <Volunteer /> },
          { path: "membership", element: <Membership /> },
          { path: "sponsorship", element: <Sponsorship /> },
          { path: "donations", element: <Donations /> },
        ],
      },

      {
        path: "contact",
        children: [
          { index: true, element: <Contact /> },
          { path: "contact-form", element: <ContactForm /> },
          { path: "office-details-map", element: <OfficeDetails /> },
          {
            path: "social-media-links",
            element: <SocialMediaLinks />,
          },
        ],
      },

      // Catch all 404 last
      { path: "*", element: <NotFound /> },
    ],
  },
]);
