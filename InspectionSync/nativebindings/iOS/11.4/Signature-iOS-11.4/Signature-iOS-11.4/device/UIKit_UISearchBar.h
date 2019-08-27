#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UISearchBar_symbols(JSContext*);
@protocol UISearchBarInstanceExports<JSExport, UIBarPositioningInstanceExports_, UITextInputTraitsInstanceExports_>
@property (nonatomic) UIOffset searchFieldBackgroundPositionAdjustment;
@property (copy,nonatomic) NSString * prompt;
@property (copy,nonatomic) NSString * text;
@property (getter=isSearchResultsButtonSelected,nonatomic) BOOL searchResultsButtonSelected;
@property (nonatomic) UIOffset searchTextPositionAdjustment;
@property (nonatomic) BOOL showsSearchResultsButton;
@property (nonatomic) BOOL showsCancelButton;
@property (nonatomic) BOOL showsScopeBar;
@property (nonatomic) NSInteger selectedScopeButtonIndex;
@property (nonatomic,strong) UIColor * barTintColor;
@property (nonatomic,strong) UIImage * backgroundImage;
@property (nonatomic) UISearchBarStyle searchBarStyle;
@property (copy,nonatomic) NSArray * scopeButtonTitles;
@property (nonatomic,strong) UIImage * scopeBarBackgroundImage;
@property (nonatomic,strong) UIColor * tintColor;
@property (readonly,nonatomic,strong) UITextInputAssistantItem * inputAssistantItem;
@property (copy,nonatomic) NSString * placeholder;
@property (getter=isTranslucent,assign,nonatomic) BOOL translucent;
@property (nonatomic) BOOL showsBookmarkButton;
@property (nonatomic) UIBarStyle barStyle;
@property (nonatomic,weak) id delegate;
@property (readwrite,nonatomic,strong) UIView * inputAccessoryView;
-(void) setSearchFieldBackgroundImage: (UIImage *) backgroundImage forState: (UIControlState) state ;
-(void) setScopeBarButtonTitleTextAttributes: (NSDictionary *) attributes forState: (UIControlState) state ;
-(void) setShowsCancelButton: (BOOL) showsCancelButton animated: (BOOL) animated ;
-(NSDictionary *) scopeBarButtonTitleTextAttributesForState: (UIControlState) state ;
-(UIImage *) scopeBarButtonDividerImageForLeftSegmentState: (UIControlState) leftState rightSegmentState: (UIControlState) rightState ;
-(void) setScopeBarButtonBackgroundImage: (UIImage *) backgroundImage forState: (UIControlState) state ;
-(id) jsinit;
-(void) setScopeBarButtonDividerImage: (UIImage *) dividerImage forLeftSegmentState: (UIControlState) leftState rightSegmentState: (UIControlState) rightState ;
JSExportAs(initWithFrame,
-(id) jsinitWithFrame: (CGRect) frame );
-(void) setPositionAdjustment: (UIOffset) adjustment forSearchBarIcon: (UISearchBarIcon) icon ;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
-(UIOffset) positionAdjustmentForSearchBarIcon: (UISearchBarIcon) icon ;
-(UIImage *) imageForSearchBarIcon: (UISearchBarIcon) icon state: (UIControlState) state ;
-(void) setBackgroundImage: (UIImage *) backgroundImage forBarPosition: (UIBarPosition) barPosition barMetrics: (UIBarMetrics) barMetrics ;
-(UIImage *) scopeBarButtonBackgroundImageForState: (UIControlState) state ;
-(UIImage *) backgroundImageForBarPosition: (UIBarPosition) barPosition barMetrics: (UIBarMetrics) barMetrics ;
-(void) setImage: (UIImage *) iconImage forSearchBarIcon: (UISearchBarIcon) icon state: (UIControlState) state ;
-(UIImage *) searchFieldBackgroundImageForState: (UIControlState) state ;
@end
@protocol UISearchBarClassExports<JSExport, UIBarPositioningClassExports_, UITextInputTraitsClassExports_>
@end
@protocol UISearchBarDelegateInstanceExports_<JSExport, UIBarPositioningDelegateInstanceExports_>
-(void) searchBar: (UISearchBar *) searchBar textDidChange: (NSString *) searchText ;
-(void) searchBar: (UISearchBar *) searchBar selectedScopeButtonIndexDidChange: (NSInteger) selectedScope ;
-(BOOL) searchBar: (UISearchBar *) searchBar shouldChangeTextInRange: (NSRange) range replacementText: (NSString *) text ;
-(void) searchBarTextDidBeginEditing: (UISearchBar *) searchBar ;
-(BOOL) searchBarShouldEndEditing: (UISearchBar *) searchBar ;
-(void) searchBarCancelButtonClicked: (UISearchBar *) searchBar ;
-(void) searchBarTextDidEndEditing: (UISearchBar *) searchBar ;
-(void) searchBarResultsListButtonClicked: (UISearchBar *) searchBar ;
-(void) searchBarBookmarkButtonClicked: (UISearchBar *) searchBar ;
-(void) searchBarSearchButtonClicked: (UISearchBar *) searchBar ;
-(BOOL) searchBarShouldBeginEditing: (UISearchBar *) searchBar ;
@end
@protocol UISearchBarDelegateClassExports_<JSExport, UIBarPositioningDelegateClassExports_>
@end
#pragma clang diagnostic pop