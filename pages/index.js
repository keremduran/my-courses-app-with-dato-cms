import { gql, GraphQLClient } from 'graphql-request';
import CourseSection from '../components/CourseSection';

export default function Home({ course }) {
  return (
    <div className=''>
      {course.courseDetail.map((section) => (
        <CourseSection details={section} key={section.id} />
      ))}
    </div>
  );
}

const query = gql`
  query {
    course {
      id
      name
      slug
      courseDetail {
        ... on CourseHeaderRecord {
          __typename
          bigTitle
          smallTitle
          description
          id
          buttonText
        }
        ... on CalloutRecord {
          __typename
          bigTitle
          smallTitle
          description
          id
          image {
            url
            width
            height
          }
        }
        ... on LearningSectionRecord {
          __typename
          hoursOfContent
          numberOfLessons
          title
          id
          learningPoint {
            title
            id
          }
        }
        ... on PricingSectionRecord {
          __typename
          title
          id
          pricingCards {
            isFree
            priceInCents
            priceSuffix
            title
            id
            description
            finePrint
            featured
            buttonText
          }
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const endpoint = 'https://graphql.datocms.com/';
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + process.env.DATOCMS_API_KEY,
    },
  });
  const course = await graphQLClient.request(query);
  return {
    props: course,
  };
}
