package edu.mayo.qia.pacs.components;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.codehaus.jackson.annotate.JsonIgnore;
import org.codehaus.jackson.annotate.JsonIgnoreProperties;

@Entity
@Table
@JsonIgnoreProperties(ignoreUnknown = true)
public final class Device {
  @Id
  @GeneratedValue
  public int deviceKey = -1;
  public String applicationEntityTitle = null;
  public String hostName = null;
  public String description = null;
  public int port = 0;
  public String callingApplicationEntityTitle = null;

  @ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.MERGE })
  @JoinColumn(name = "PoolKey")
  @JsonIgnore
  public Pool pool;

  public Device() {
  }

  public Device(String applicationEntityTitle, String hostName, int port) {
    this(applicationEntityTitle, hostName, port, null, null);
  }

  public Device(String applicationEntityTitle, String hostName, int port, Pool pool) {
    this(applicationEntityTitle, hostName, port, null, pool);
  }

  public Device(String applicationEntityTitle, String hostName, int port, String callingApplicationEntityTitle, Pool pool) {
    this.applicationEntityTitle = applicationEntityTitle;
    this.hostName = hostName;
    this.port = port;
    this.pool = pool;
    this.callingApplicationEntityTitle = callingApplicationEntityTitle;
  }

  public Pool getPool() {
    return pool;
  }

  public void setPool(Pool pool) {
    this.pool = pool;
  }

  public void update(Device update) {
    this.applicationEntityTitle = update.applicationEntityTitle;
    this.description = update.description;
    this.port = update.port;
    this.hostName = update.hostName;
  }

}
