#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UISearchDisplayController_symbols(JSContext*);
@protocol UISearchDisplayControllerInstanceExports<JSExport>
@property (nonatomic,weak) id searchResultsDataSource;
@property (nonatomic,weak) id searchResultsDelegate;
@property (readonly,nonatomic) UINavigationItem * navigationItem;
@property (readonly,nonatomic) UIViewController * searchContentsController;
@property (assign,nonatomic) id delegate;
@property (getter=isActive,nonatomic) BOOL active;
@property (readonly,nonatomic) UISearchBar * searchBar;
@property (readonly,nonatomic) UITableView * searchResultsTableView;
@property (copy,nonatomic) NSString * searchResultsTitle;
@property (assign,nonatomic) BOOL displaysSearchBarInNavigationBar;
JSExportAs(initWithSearchBarContentsController,
-(id) jsinitWithSearchBar: (UISearchBar *) searchBar contentsController: (UIViewController *) viewController );
-(void) setActive: (BOOL) visible animated: (BOOL) animated ;
@end
@protocol UISearchDisplayControllerClassExports<JSExport>
@end
@protocol UISearchDisplayDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) searchDisplayController: (UISearchDisplayController *) controller didShowSearchResultsTableView: (UITableView *) tableView ;
-(void) searchDisplayController: (UISearchDisplayController *) controller willHideSearchResultsTableView: (UITableView *) tableView ;
-(void) searchDisplayControllerDidEndSearch: (UISearchDisplayController *) controller ;
-(void) searchDisplayController: (UISearchDisplayController *) controller willUnloadSearchResultsTableView: (UITableView *) tableView ;
-(void) searchDisplayControllerDidBeginSearch: (UISearchDisplayController *) controller ;
-(void) searchDisplayController: (UISearchDisplayController *) controller didLoadSearchResultsTableView: (UITableView *) tableView ;
-(BOOL) searchDisplayController: (UISearchDisplayController *) controller shouldReloadTableForSearchString: (NSString *) searchString ;
-(void) searchDisplayController: (UISearchDisplayController *) controller didHideSearchResultsTableView: (UITableView *) tableView ;
-(void) searchDisplayControllerWillEndSearch: (UISearchDisplayController *) controller ;
-(void) searchDisplayControllerWillBeginSearch: (UISearchDisplayController *) controller ;
-(void) searchDisplayController: (UISearchDisplayController *) controller willShowSearchResultsTableView: (UITableView *) tableView ;
-(BOOL) searchDisplayController: (UISearchDisplayController *) controller shouldReloadTableForSearchScope: (NSInteger) searchOption ;
@end
@protocol UISearchDisplayDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop