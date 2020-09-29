import config from "gatsby-plugin-config";

const queryData = async () => {
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const token = process.env.GRAPHQL_TOKEN;
    const response = await fetch(`https://api.graphqlsheet.com/api/${spreadsheetId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': token,
        },
        body: JSON.stringify({
            query: `
          {
            get (limit: 20) {
              Title {
                  Description {
                    Technologies {
                        GithubRepoUrl {
                            Url
                        }
                    }
                }
              }
            }
          }
        `
        })
    });
    const responseJSON = await response.json();
    console.log(responseJSON);
};

queryData();

export default queryData;