package edu.mayo.qia.pacs.configuration;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ServerConfiguration {
  @Valid
  @NotNull
  @JsonProperty
  public String host;

  @Valid
  @JsonProperty
  public String templatePath;

  @Valid
  @JsonProperty
  @NotNull
  public int dicomPort;

  @Valid
  @JsonProperty
  @NotNull
  public String imageDirectory;

  public String getHost() {
    return host;
  }

  public String getTemplatePath() {
    return templatePath;
  }
}