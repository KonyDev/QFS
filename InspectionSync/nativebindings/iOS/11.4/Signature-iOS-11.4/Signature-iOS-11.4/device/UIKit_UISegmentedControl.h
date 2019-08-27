#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UISegmentedControl_symbols(JSContext*);
@protocol UISegmentedControlSpringLoadingCategoryInstanceExports<JSExport, UISpringLoadedInteractionSupportingInstanceExports_>
@end
@protocol UISegmentedControlSpringLoadingCategoryClassExports<JSExport, UISpringLoadedInteractionSupportingClassExports_>
@end
@protocol UISegmentedControlInstanceExports<JSExport, NSCodingInstanceExports_>
@property (nonatomic) NSInteger selectedSegmentIndex;
@property (readonly,nonatomic) NSUInteger numberOfSegments;
@property (nonatomic) UISegmentedControlStyle segmentedControlStyle;
@property (nonatomic,strong) UIColor * tintColor;
@property (nonatomic) BOOL apportionsSegmentWidthsByContent;
@property (getter=isMomentary,nonatomic) BOOL momentary;
-(void) setContentOffset: (CGSize) offset forSegmentAtIndex: (NSUInteger) segment ;
-(NSString *) titleForSegmentAtIndex: (NSUInteger) segment ;
JSExportAs(initWithItems,
-(id) jsinitWithItems: (NSArray *) items );
-(BOOL) isEnabledForSegmentAtIndex: (NSUInteger) segment ;
-(void) setTitleTextAttributes: (NSDictionary *) attributes forState: (UIControlState) state ;
-(void) setWidth: (CGFloat) width forSegmentAtIndex: (NSUInteger) segment ;
-(void) setImage: (UIImage *) image forSegmentAtIndex: (NSUInteger) segment ;
-(void) insertSegmentWithTitle: (NSString *) title atIndex: (NSUInteger) segment animated: (BOOL) animated ;
-(void) removeSegmentAtIndex: (NSUInteger) segment animated: (BOOL) animated ;
-(UIImage *) backgroundImageForState: (UIControlState) state barMetrics: (UIBarMetrics) barMetrics ;
-(UIImage *) dividerImageForLeftSegmentState: (UIControlState) leftState rightSegmentState: (UIControlState) rightState barMetrics: (UIBarMetrics) barMetrics ;
-(void) setContentPositionAdjustment: (UIOffset) adjustment forSegmentType: (UISegmentedControlSegment) leftCenterRightOrAlone barMetrics: (UIBarMetrics) barMetrics ;
-(void) insertSegmentWithImage: (UIImage *) image atIndex: (NSUInteger) segment animated: (BOOL) animated ;
-(void) setEnabled: (BOOL) enabled forSegmentAtIndex: (NSUInteger) segment ;
-(UIImage *) imageForSegmentAtIndex: (NSUInteger) segment ;
-(void) setBackgroundImage: (UIImage *) backgroundImage forState: (UIControlState) state barMetrics: (UIBarMetrics) barMetrics ;
-(void) setTitle: (NSString *) title forSegmentAtIndex: (NSUInteger) segment ;
-(void) removeAllSegments;
-(CGSize) contentOffsetForSegmentAtIndex: (NSUInteger) segment ;
-(void) setDividerImage: (UIImage *) dividerImage forLeftSegmentState: (UIControlState) leftState rightSegmentState: (UIControlState) rightState barMetrics: (UIBarMetrics) barMetrics ;
-(CGFloat) widthForSegmentAtIndex: (NSUInteger) segment ;
-(UIOffset) contentPositionAdjustmentForSegmentType: (UISegmentedControlSegment) leftCenterRightOrAlone barMetrics: (UIBarMetrics) barMetrics ;
-(NSDictionary *) titleTextAttributesForState: (UIControlState) state ;
@end
@protocol UISegmentedControlClassExports<JSExport, NSCodingClassExports_>
@end
#pragma clang diagnostic pop