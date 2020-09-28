const queryData = async () => {
    const spreadsheetId = process.env.SPREADSHEET_ID;
    const response = await fetch(`https://api.graphqlsheet.com/api/${spreadsheetId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'token': process.env.GRAPHQL_TOKEN
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