#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITableViewController_symbols(JSContext*);
@protocol UITableViewControllerInstanceExports<JSExport, UITableViewDelegateInstanceExports_, UITableViewDataSourceInstanceExports_>
@property (nonatomic) BOOL clearsSelectionOnViewWillAppear;
@property (nonatomic,strong) UIRefreshControl * refreshControl;
@property (nonatomic,strong) UITableView * tableView;
JSExportAs(initWithNibNameBundle,
-(id) jsinitWithNibName: (NSString *) nibNameOrNil bundle: (NSBundle *) nibBundleOrNil );
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
JSExportAs(initWithStyle,
-(id) jsinitWithStyle: (UITableViewStyle) style );
@end
@protocol UITableViewControllerClassExports<JSExport, UITableViewDelegateClassExports_, UITableViewDataSourceClassExports_>
@end
#pragma clang diagnostic pop