import {
    getCommonCard,
    getCommonTitle,
    getTextField,
    getSelectField,
    getCommonContainer,
    getCommonParagraph,
    getPattern,
    getDateField,
    getLabel
  } from "egov-ui-framework/ui-config/screens/specs/utils";
  import { searchApiCall } from "./functions";
  

  const resetFields = (state, dispatch) => {
    dispatch(
      handleField(
        "search",
        "components.div.children.NOCApplication.children.cardContent.children.appNOCAndMobNumContainer.children.applicationNo",
        "props.value",
        ""
      )
    );
    dispatch(
      handleField(
        "search",
        "components.div.children.NOCApplication.children.cardContent.children.appNOCAndMobNumContainer.children.NOCNo",
        "props.value",
        ""
      )
    );
    dispatch(
      handleField(
        "search",
        "components.div.children.NOCApplication.children.cardContent.children.appNOCAndMobNumContainer.children.ownerMobNo",
        "props.value",
        ""
      )
    );
    dispatch(
      handleField(
        "search",
        "components.div.children.NOCApplication.children.cardContent.children.appStatusAndToFromDateContainer.children.applicationNo",
        "props.value",
        ""
      )
    );
    dispatch(
      handleField(
        "search",
        "components.div.children.NOCApplication.children.cardContent.children.appStatusAndToFromDateContainer.children.fromDate",
        "props.value",
        ""
      )
    );
    dispatch(
      handleField(
        "search",
        "components.div.children.NOCApplication.children.cardContent.children.appStatusAndToFromDateContainer.children.toDate",
        "props.value",
        ""
      )
    );
  };
  
  export const searchApplications = getCommonCard({
    subHeader: getCommonTitle({
      labelName: "Search Application",
      labelKey: "SEARCH_APPLICATION"
    }),
    subParagraph: getCommonParagraph({
      labelName: "Provide at least one non-mandatory parameter to search for an application",
      labelKey: "PT_HOME_SEARCH_RESULTS_DESC"
    }),
    appTradeAndMobNumContainer: getCommonContainer({
        propertyTaxApplicationNo: getTextField({
            label: {
              labelName: "Application No",
              labelKey: "PT_PROPERTY_APPLICATION_NO"
            },
            placeholder: {
              labelName: "Enter Application No",
              labelKey: "PT_PROPERTY_APPLICATION_NO_PLACEHOLDER"
            },
            gridDefination: {
              xs: 12,
              sm: 4,
              
            },
            required: false,
            pattern: /^[a-zA-Z0-9-]*$/i,
            errorMessage: "ERR_INVALID_APPLICATION_NO",
            jsonPath: "searchScreen.applicationNumber"
          }), 
      ownerMobNo: getTextField({
        label: {
          labelName: "Owner Mobile No.",
          labelKey: "PT_HOME_SEARCH_APP_OWN_MOB_LABEL"
        },
        placeholder: {
          labelName: "Enter your mobile No.",
          labelKey: "PT_HOME_SEARCH_RESULTS_OWN_MOB_PLACEHOLDER"
        },
        gridDefination: {
          xs: 12,
          sm: 4,
          

        },
        iconObj: {
          label: "+91 |",
          position: "start"
        },
        required: false,
        pattern: getPattern("MobileNo"),
        jsonPath: "searchScreen.mobileNumber",
        errorMessage: "ERR_INVALID_MOBILE_NUMBER"
      }),
      propertyTaxUniqueId: getTextField({
        label: {
          labelName: "Property Tax Unique Id",
          labelKey: "PT_PROPERTY_UNIQUE_ID"
        },
        placeholder: {
          labelName: "Enter Property Tax Unique Id",
          labelKey: "PT_PROPERTY_UNIQUE_ID_PLACEHOLDER"
        },
        gridDefination: {
          xs: 12,
          sm: 4,
          
        },
        required: false,
        pattern: /^[a-zA-Z0-9-]*$/i,
        errorMessage: "ERR_INVALID_APPLICATION_NO",
        jsonPath: "searchScreen.applicationNumber"
      }),
    }),
    button: getCommonContainer({
        buttonContainer: getCommonContainer({
          resetButton: {
            componentPath: "Button",
            gridDefination: {
              xs: 12,
              sm: 6
              // align: "center"
            },
            props: {
              variant: "outlined",
              style: {
                color: "#FE7A51",
                borderColor: "#FE7A51",
                width: "220px",
                height: "48px",
                margin: "8px",
                float: "right"
              }
            },
            children: {
              buttonLabel: getLabel({
                labelName: "Reset",
                labelKey: "PT_HOME_RESET_BUTTON"
              })
            },
            onClickDefination: {
              action: "condition",
              callBack: resetFields
            }
          },
          searchButton: {
            componentPath: "Button",
            gridDefination: {
              xs: 12,
              sm: 6
              // align: "center"
            },
            props: {
              variant: "contained",
              style: {
                color: "white",
                margin: "8px",
                backgroundColor: "rgba(0, 0, 0, 0.6000000238418579)",
                borderRadius: "2px",
                width: "220px",
                height: "48px"
              }
            },
            children: {
              buttonLabel: getLabel({
                labelName: "Search",
                labelKey: "PT_HOME_SEARCH_RESULTS_BUTTON_SEARCH"
              })
            },
            onClickDefination: {
              action: "condition",
              callBack: searchApiCall
            }
          }
        })
      })
  });
  