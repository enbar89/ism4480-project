import React, { Component } from 'react';
import './styles/project-documents.css';

export default class ProjectDocuments extends Component
{
  render()
  {
    return (
      <div className="src-components-project-documents--container">

        <div className="src-components-project-documents--banner">

          <div className="src-components-project-documents--bannerLogo">
            <i className="fa fa-tablet" />
            <i className="fa fa-desktop" />
            <i className="fa fa-mobile" />
          </div>

          <div className="src-components-project-documents--bannerText">
            Project Documentation
          </div>

        </div>

        <div className="src-components-project-documents--body">

          <div className="src-components-project-documents--bodyRow">

            <div className="src-components-project-documents--bodyRowItem">
              <a href="files\EricBarrier--GroupProj-Part1-EBusinessStrategy.docx">
                <div className="src-components-project-documents--bodyRowIcon">
                  <i className="fa fa-file-text" />
                </div>
                <div className="src-components-project-documents--bodyRowHeader">
                  Phase 1
                </div>
              </a>
            </div>

            <div className="src-components-project-documents--bodyRowItem">
              <div className="src-components-project-documents--bodyRowIcon">
                <i className="fa fa-forward" />
              </div>
            </div>

            <div className="src-components-project-documents--bodyRowItem">
              <a href="files\EricBarrier--GroupProj-Part2-EBusinessPlan.docx">
                <div className="src-components-project-documents--bodyRowIcon">
                  <i className="fa fa-file-text" />
                </div>
                <div className="src-components-project-documents--bodyRowHeader">
                  Phase 2
                </div>
              </a>
            </div>

            <div className="src-components-project-documents--bodyRowItem">
              <div className="src-components-project-documents--bodyRowIcon">
                <i className="fa fa-forward" />
              </div>
            </div>

            <div className="src-components-project-documents--bodyRowItem">
              <a href="files\EricBarrier--GroupProj-Part3-Implementation.docx">
                <div className="src-components-project-documents--bodyRowIcon">
                  <i className="fa fa-file-text" />
                </div>
                <div className="src-components-project-documents--bodyRowHeader">
                  Phase 3
                </div>
              </a>
            </div>

          </div>

        </div>

      </div>
    );
  }
}