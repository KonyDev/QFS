#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UICollectionViewController_symbols(JSContext*);
@protocol UICollectionViewControllerInstanceExports<JSExport, UICollectionViewDelegateInstanceExports_, UICollectionViewDataSourceInstanceExports_>
@property (nonatomic) BOOL clearsSelectionOnViewWillAppear;
@property (nonatomic,strong) __kindof UICollectionView * collectionView;
@property (assign,nonatomic) BOOL useLayoutToLayoutNavigationTransitions;
@property (nonatomic) BOOL installsStandardGestureForInteractiveMovement;
@property (readonly,nonatomic) UICollectionViewLayout * collectionViewLayout;
JSExportAs(initWithNibNameBundle,
-(id) jsinitWithNibName: (NSString *) nibNameOrNil bundle: (NSBundle *) nibBundleOrNil );
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
JSExportAs(initWithCollectionViewLayout,
-(id) jsinitWithCollectionViewLayout: (UICollectionViewLayout *) layout );
@end
@protocol UICollectionViewControllerClassExports<JSExport, UICollectionViewDelegateClassExports_, UICollectionViewDataSourceClassExports_>
@end
#pragma clang diagnostic pop