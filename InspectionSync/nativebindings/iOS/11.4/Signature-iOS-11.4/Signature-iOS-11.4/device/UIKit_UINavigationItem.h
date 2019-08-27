#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UINavigationItem_symbols(JSContext*);
@protocol UINavigationItemInstanceExports<JSExport, NSCodingInstanceExports_>
@property (nonatomic) BOOL hidesSearchBarWhenScrolling;
@property (copy,nonatomic) NSString * prompt;
@property (retain,nonatomic) UISearchController * searchController;
@property (copy,nonatomic) NSString * title;
@property (copy,nonatomic) NSArray * rightBarButtonItems;
@property (copy,nonatomic) NSArray * leftBarButtonItems;
@property (assign,nonatomic) BOOL hidesBackButton;
@property (assign,readwrite,nonatomic) UINavigationItemLargeTitleDisplayMode largeTitleDisplayMode;
@property (nonatomic,strong) UIBarButtonItem * backBarButtonItem;
@property (nonatomic,strong) UIBarButtonItem * rightBarButtonItem;
@property (nonatomic,strong) UIView * titleView;
@property (nonatomic) BOOL leftItemsSupplementBackButton;
@property (nonatomic,strong) UIBarButtonItem * leftBarButtonItem;
-(void) setRightBarButtonItems: (NSArray *) items animated: (BOOL) animated ;
JSExportAs(initWithTitle,
-(id) jsinitWithTitle: (NSString *) title );
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) coder );
-(void) setHidesBackButton: (BOOL) hidesBackButton animated: (BOOL) animated ;
-(void) setRightBarButtonItem: (UIBarButtonItem *) item animated: (BOOL) animated ;
-(void) setLeftBarButtonItem: (UIBarButtonItem *) item animated: (BOOL) animated ;
-(void) setLeftBarButtonItems: (NSArray *) items animated: (BOOL) animated ;
@end
@protocol UINavigationItemClassExports<JSExport, NSCodingClassExports_>
@end
#pragma clang diagnostic pop