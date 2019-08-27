#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UINavigationBar_symbols(JSContext*);
@protocol UINavigationBarInstanceExports<JSExport, NSCodingInstanceExports_, UIBarPositioningInstanceExports_>
@property (readonly,nonatomic,strong) UINavigationItem * topItem;
@property (copy,nonatomic) NSArray * items;
@property (assign,nonatomic) UIBarStyle barStyle;
@property (copy,nonatomic) NSDictionary * largeTitleTextAttributes;
@property (readonly,nonatomic,strong) UINavigationItem * backItem;
@property (nonatomic,strong) UIColor * barTintColor;
@property (nonatomic,strong) UIImage * backIndicatorImage;
@property (nonatomic,strong) UIImage * shadowImage;
@property (nonatomic,strong) UIColor * tintColor;
@property (nonatomic,strong) UIImage * backIndicatorTransitionMaskImage;
@property (nonatomic,weak) id delegate;
@property (copy,nonatomic) NSDictionary * titleTextAttributes;
@property (getter=isTranslucent,assign,nonatomic) BOOL translucent;
@property (assign,readwrite,nonatomic) BOOL prefersLargeTitles;
-(void) pushNavigationItem: (UINavigationItem *) item animated: (BOOL) animated ;
-(CGFloat) titleVerticalPositionAdjustmentForBarMetrics: (UIBarMetrics) barMetrics ;
-(void) setTitleVerticalPositionAdjustment: (CGFloat) adjustment forBarMetrics: (UIBarMetrics) barMetrics ;
-(UIImage *) backgroundImageForBarMetrics: (UIBarMetrics) barMetrics ;
-(void) setBackgroundImage: (UIImage *) backgroundImage forBarPosition: (UIBarPosition) barPosition barMetrics: (UIBarMetrics) barMetrics ;
-(void) setBackgroundImage: (UIImage *) backgroundImage forBarMetrics: (UIBarMetrics) barMetrics ;
-(UIImage *) backgroundImageForBarPosition: (UIBarPosition) barPosition barMetrics: (UIBarMetrics) barMetrics ;
-(void) setItems: (NSArray *) items animated: (BOOL) animated ;
-(UINavigationItem *) popNavigationItemAnimated: (BOOL) animated ;
@end
@protocol UINavigationBarClassExports<JSExport, NSCodingClassExports_, UIBarPositioningClassExports_>
@end
@protocol UINavigationBarDelegateInstanceExports_<JSExport, UIBarPositioningDelegateInstanceExports_>
-(void) navigationBar: (UINavigationBar *) navigationBar didPushItem: (UINavigationItem *) item ;
-(BOOL) navigationBar: (UINavigationBar *) navigationBar shouldPushItem: (UINavigationItem *) item ;
-(void) navigationBar: (UINavigationBar *) navigationBar didPopItem: (UINavigationItem *) item ;
-(BOOL) navigationBar: (UINavigationBar *) navigationBar shouldPopItem: (UINavigationItem *) item ;
@end
@protocol UINavigationBarDelegateClassExports_<JSExport, UIBarPositioningDelegateClassExports_>
@end
#pragma clang diagnostic pop