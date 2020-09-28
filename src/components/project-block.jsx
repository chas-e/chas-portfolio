import React, { useEffect } from 'react';
import Img from "gatsby-image";
import queryData from "../utils/project-data-service";

const ProjectBlock = () => {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Technologies</th>
                        <th>Github Url</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                        <td>data</td>
                    </tr>
                </tbody>
            </table>

        </>
    );
}

export default ProjectBlock;

