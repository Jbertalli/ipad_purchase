import { Header, Accordion, Label, Segment, Icon, List } from 'semantic-ui-react';

export default function AccountOrders({ orders }) {

  console.log(orders)
  
    function mapOrdersToPanels(orders) {
      return orders.map(order => ({
        key: order._id,
        content: {
          content: (
            <>
              <List.Header as="h3">
                Total: ${order.total}
                <Label
                  content={order.product}
                  basic
                  horizontal
                  style={{ marginLeft: '1em' }}
                />
              </List.Header>
            </>
          )
        }
      }));
    }
  
    return (
    <>
      <div style={{ marginBottom: '500px'}}>
        <Header as="h2" >
          <Icon name="folder open" />
          Order History
        </Header>

        {orders.length === 0 ? (
          <Segment inverted tertiary color="grey" textAlign="center">
            <Header icon>
              <Icon name="copy outline" />
              No past orders.
            </Header>
          </Segment>
        ) : (
          <Accordion
              fluid
              styled
              exclusive={false}
              panels={mapOrdersToPanels(orders)}
          />
        )}
      </div>
    </>
    )
  }
