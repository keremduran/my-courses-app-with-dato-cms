import { gql, GraphQLClient } from 'graphql-request';
import CourseSection from '../components/CourseSection';

export default function Home({ course }) {
  console.log('HOME FUNC COURSE: ', course);
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
          bigtitle
          smalltitle
          description
          id
        }
      }
    }
  }
`;

export async function getStaticProps() {
  const endpoint = 'https://graphql.datocms.com/';
  console.log('API KEY: ', process.env.DATOCMS_API_KEY);
  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      'content-type': 'application/json',
      authorization: 'Bearer ' + process.env.DATOCMS_API_KEY,
    },
  });
  const course = await graphQLClient.request(query);
  console.log(course);
  return {
    props: course,
  };
}
